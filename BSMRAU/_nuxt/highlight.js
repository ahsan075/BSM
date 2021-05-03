var intervalHandle = null;
function pauseScroll() {
    clearInterval(intervalHandle);
}
function resumeScroll() {
    intervalHandle = setInterval("vScroll.move()", 9);
}
function scroll(oid, iid) {
    this.oCont = document.getElementById(oid);
    this.ele = document.getElementById(iid);
    this.width = this.ele.clientWidth;
    this.n = this.oCont.clientWidth;
    this.move = function () {
        this.ele.style.left = this.n + "px";
        this.n--;
        if (this.n < -this.width) {
            this.n = this.oCont.clientWidth;
        }
    };
}
var vScroll;
function setup() {
    vScroll = new scroll("oScroll", "scroll");
    intervalHandle = setInterval("vScroll.move()", 9);
}
onload = function () {
    setup();
};
