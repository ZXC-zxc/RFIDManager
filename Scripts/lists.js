function listBindedEqu(sn, readerIP, equIP, vms){
    var html = '';
    html += '<tr>';
    html += '<td>'+sn+'</td>';
    html += '<td>'+readerIP+'</td>';
    html += '<td>'+equIP+'</td>';
    html += '<td>'+vms+'</td>';
    html += '<td><a href="#" onclick="editBind(\''+sn+'\', \''+readerIP+'\', \''+equIP+'\', \''+vms+'\')">修改</a></td>';
    html += '</tr>';
    $(".binded tbody").html($(".binded tbody").html() + html);
}

function editBind(sn, readerIP, equIP, vms)
{
    $("#newSN").val(sn);
    $("#newReaderIP").val(readerIP);
    $("#newEquIP").val(equIP);
    $("#newVMSNo").val(vms);
}

function addBind(){
    var sn = $("#newSN").val();
    var reader_ipport = $("#newReaderIP").val();
    var equ_ipport = $("#newEquIP").val();
    var vms_no = $("#newVMSNo").val();
    //检查sn是否重复
    //检查ip地址
    ajaxAddEqu(sn, reader_ipport, equ_ipport, vms_no);
}