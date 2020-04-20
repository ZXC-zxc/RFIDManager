function renderInit(){
    $("#addEquipmentBtn").button();//新增货柜
    $( "#newReaderIP" ).autocomplete();
    $( "#newEquIP" ).autocomplete();
    $( "#newVMSNo" ).autocomplete();
    var tabs = $( "#tabs" ).tabs();

    $("#addEquipmentBtn").click(function(){
        addBind();
        renderList();


        // //根据有几个柜子动态添加页面(包扩title和内容)
        // var sn = $("#newSN").val();
        // $( "#tabs" ).html($( "#tabs" ).html()+ newEquipmentTab("tabs-" + sn));
        // tabs.find( ".ui-tabs-nav" ).append( "<li id='tabNav-" + sn +"'><a href='#tabs-"+ sn + "'>货柜" + sn + "</a></li>" );
        // tabs.tabs( "refresh" );
        // selectTab("tabs-" + sn);
        
        // tabs.tabs( "refresh" );
    });
}
function renderList(){
    var ListJson = ajaxGetAllEquipments();
    for(var i=0;i<ListJson.data.length;i++){
        var readerIP = ListJson.data[i].reader_ip + ":" + ListJson.data[i].reader_port.toString();
        var equIP = ListJson.data[i].equ_ip + ":" + ListJson.data[i].equ_port.toString();
        listBindedEqu(ListJson.data[i].equ_sn,readerIP,equIP,ListJson.data[i].equ_no)
    }
}

function renderTab(){

}