(function() {
    var startBtn = document.querySelector('.start-btn');
    var _start;
    var restartBtn = document.querySelector('.restart-btn');
    var Big = document.getElementById('big');
    //var progressElem = document.getElementById('J_UploadProgress')
    //var previewElem = document.getElementById('J_PicturePreview')
    var videoWrapper = document.getElementById('video-wrapper');
    var progressWrapper = document.querySelector('.progress-wrapper');
    var progressInnerBar = document.querySelector('.progress-inner-bar');
    if (coverPath) {
        videoWrapper.innerHTML = '<img src="' + coverPath + '"/>'
        startBtn.style.display = 'none';
        restartBtn.style.display = 'block';
    }

    function isPhoneX() {
        return /iphone/gi.test(navigator.userAgent) && (screen.height === 812 && screen.width === 375)
    }

    var ipX = isPhoneX();
    if (ipX) {
        Big.className = 'blessing-wrapper iphonex'
    }
    var oUpload = document.querySelector('.upload');
    oUpload.onclick = function() {
        if (!pictureUrl) {
            layer.open({
                content: '请先录制视频',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
        } else {
            if (oldURL == pictureUrl) {
                return;
            }
            $.ajax({
                url: '/save',
                type: 'POST',
                data: {
                    nickName: nickname,
                    avatarUrl: headimgurl,
                    openid: openid,
                    coverPath: coverPath,
                    pictureUrl: pictureUrl
                },
                success: function(res) {
                    oldURL = pictureUrl
                    layer.open({
                        content: '上传成功',
                        skin: 'msg',
                        time: 2 //2秒后自动关闭
                    });
                }
            })
        }
    }

    startBtn.onclick = restartBtn.onclick = function() {
        _start = this.querySelector('.start')
        _start.value = '';
        progressInnerBar.style.width = 0;
        uploadAction({
            success: function(result) {
                if (result && result.success && result.pictureUrl && result.coverPath) {

                    progressWrapper.style.display = 'none';
                    coverPath = result.coverPath;
                    pictureUrl = result.pictureUrl;
                    startBtn.style.display = 'none';
                    restartBtn.style.display = 'block';
                    videoWrapper.innerHTML = '<img src="' + result.coverPath + '"/>'
                }
            },
            progress: function(data) {
                progressWrapper.style.display = 'block';
                if (data && data * 1 > 0) {
                    progressInnerBar.style.width = data + '%';
                }
            }
        })
    }

    /**
     * 类型判断
     * @type {Object}
     */
    var UtilType = {
        isPrototype: function(data) {
            return Object.prototype.toString.call(data).toLowerCase();
        },

        isJSON: function(data) {
            return this.isPrototype(data) === '[object object]';
        },

        isFunction: function(data) {
            return this.isPrototype(data) === '[object function]';
        }
    }

    /**
     * form表单上传请求事件
     * @param  {object} options 请求参数
     */
    function requestEvent(options) {
        try {
            var formData = options.formData
            var xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function() {

                if (xhr.readyState === 4 && xhr.status === 200) {
                    options.success(JSON.parse(xhr.responseText))
                }
            }

            xhr.upload.onprogress = function(evt) {
                var loaded = evt.loaded
                var tot = evt.total
                var per = Math.floor(100 * loaded / tot)
                options.progress(per)
            }
            xhr.open('post', '/upload')
            xhr.send(formData)
        } catch (err) {
            options.fail(err)
        }
    }

    /**
     * 上传事件
     * @param  {object} options 上传参数      
     */
    function uploadEvent(options) {
        var file
        var formData = new FormData()
        _start.onchange = _start.onpropertychange = function() {
            file = _start.files[0]
            formData.append('files', file)

            requestEvent({
                formData,
                success: options.success,
                fail: options.fail,
                progress: options.progress
            })
        }

    }

    /**
     * 上传操作
     * @param  {object} options 上传参数     
     */
    function uploadAction(options) {
        if (!UtilType.isJSON(options)) {
            console.log('upload options is null')
            return
        }
        var _options = {}
        _options.success = UtilType.isFunction(options.success) ? options.success : function() {}
        _options.fail = UtilType.isFunction(options.fail) ? options.fail : function() {}
        _options.progress = UtilType.isFunction(options.progress) ? options.progress : function() {}

        uploadEvent(_options)
    }


})()