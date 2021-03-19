import $ from 'jquery'
window.onload = function (){
    $('#check').on('click',function (){
        var $inp = $('#pass');
        $inp.attr('type') === 'password' ? $inp.attr('type', 'text') : $inp.attr('type', 'password')

        var $inpConf = $('#passConf');
        $inpConf.attr('type') === 'password' ? $inpConf.attr('type', 'text') : $inpConf.attr('type', 'password')
    })
}