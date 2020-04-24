function listBindedEqu(sn, readerIP, equIP, vms){
    var html = '';
    html += '<tr>';
    html += '<td>'+sn+'</td>';
    html += '<td>'+readerIP+'</td>';
    html += '<td>'+equIP+'</td>';
    html += '<td>'+vms+'</td>';
    html += '<td><a href="#" onclick="editBind(\''+sn+'\', \''+readerIP+'\', \''+equIP+'\', \''+vms+'\')">修改</a>';
    html += ' <a href="#" onclick="deleteBind(\''+sn+'\')">删除</a></td>';
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

function deleteBind(sn)
{
    ajaxDeleteEqu(sn);
    //refresh
    renderList();
}

function addBind(){
    var sn = $("#newSN").val();
    var reader_ipport = $("#newReaderIP").val();
    var equ_ipport = $("#newEquIP").val();
    var vms_no = $("#newVMSNo").val();
    //检查sn是否重复,如果重复走update，如果没重复走new
    var isRepeat = false;
    for(var i=0;i<EqumentList.length;i++){
        if(sn == EqumentList[i].equ_sn){
            isRepeat = true;
            break;
        }
    }    
    for(var i=0;i<EqumentList.length;i++){
        if(vms_no == EqumentList[i].equ_no){
            alert("VMS编号已定，请勿重复绑定");
            return ;
        }
    }    

    var reg=new RegExp(/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\:([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/);
    if(!reg.test(reader_ipport))
    { 
        alert("读写器IP格式不正确!应该是127.0.0.1:8080这种格式"); 
        return;
    } 
    if(!reg.test(equ_ipport))
    { 
        alert("屏显IP格式不正确!应该是127.0.0.1:8080这种格式"); 
        return;
    } 
    
    //检查ip地址

    if(!isRepeat){
        ajaxAddEqu(sn, reader_ipport, equ_ipport, vms_no);
    }
    else{
        ajaxUpdateEqu(sn, reader_ipport, equ_ipport, vms_no);
    }
    //refresh
    renderList();
    
}