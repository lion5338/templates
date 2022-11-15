import axios from "axios";

import {
    ElNotification
} from 'element-plus'

export var APIURL = 'http://localhost/friend/public/api/'
export var backURL = 'http://localhost/friend/media/' //後端資料夾
export var sharedURL = 'http://localhost/friend/sharedImg/' //後臺管理(不同laravel project)資料夾

export function axiosPost(path, userData, params) {

    axios.post(path, {
            userId: userData['userId'],
            token: userData['token'],
            params: params,

        })
        .then(function(response) {
            console.log(JSON.parse(response));

        });


}
export function getVideo(pic) {
    return new URL(backURL + pic,
            import.meta.url).href
        //return require(backURL + pic);
}
export function getBackImg(pic) {
    return new URL(backURL + pic,
        import.meta.url).href
}

export function getFrontImg(pic) {

    return new URL(`../assets/img/${pic}`,
        import.meta.url).href


}


export function fileErrorMsg(theTitle, theContent, type) {
    ElNotification({
        title: theTitle,
        message: theContent,
        type: type,
    })
}

export function changeBg(showTarget, hideTarget, showStyle, hideStyle) {

    if (document.getElementById(showTarget).classList.contains(showStyle)) {

        document.getElementById(showTarget).classList.add(hideStyle);
        document.getElementById(showTarget).classList.remove(showStyle);
    }
    if (document.getElementById(hideTarget).classList.contains(hideStyle)) {

        document.getElementById(hideTarget).classList.add(showStyle);
        document.getElementById(hideTarget).classList.remove(hideStyle);
    }


}

export function removeSpeficFromArray(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}


export function scrollToSpefic(refName) {
    const el = document.getElementById(refName);
    el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

export function convertRemToPixels(rem) {
    var res = rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

    return res
}

export function getIntrinsicSize(imgPath) {


    var img = new Image();
    img.src = imgPath;
    var res = [];
    res['height'] = img.height
    res['width'] = img.width
    return res;
}
export function getIntrinsicImg(imgPath) {
    var img = new Image();
    img.src = imgPath;

    return img;
}

export function maxOfArray(array) {
    return Math.max.apply(Math, array);
}

export function getCurrentDateTime() {
    var now = new Date();
    //var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        second = '0' + second;
    }
    var dateTime = +month + '月' + day + '日 ' + hour + ':' + minute;
    return dateTime;
}

export function openInNewTab(url) {
    window.open(url, '_blank').focus();
}