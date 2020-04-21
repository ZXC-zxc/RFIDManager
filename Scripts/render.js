function renderInit(){
    $("#addEquipmentBtn").button();//新增货柜
    $( "#newReaderIP" ).autocomplete();
    $( "#newEquIP" ).autocomplete();
    $( "#newVMSNo" ).autocomplete();
    tabs = $( "#tabs" ).tabs();

    $("#addEquipmentBtn").click(function(){
        addBind();
    });
}
function renderList(){
    $(".binded tbody").html("");
    $( "#tabs li" ).remove();
    $( "#tabs .rfid-panels" ).remove();

    var ListJson = ajaxGetAllEquipments();
    EqumentList = ListJson;
    for(var i=0;i<ListJson.length;i++){
        var readerIP = ListJson[i].reader_ip + ":" + ListJson[i].reader_port.toString();
        var equIP = ListJson[i].equ_ip + ":" + ListJson[i].equ_port.toString();
        listBindedEqu(ListJson[i].equ_sn,readerIP,equIP,ListJson[i].equ_no);
        renderTab(ListJson[i].equ_sn);
    }
}

function renderTab(sn){
    $( "#tabs" ).html($( "#tabs" ).html()+ newEquipmentTab(sn));
    tabs.find( ".ui-tabs-nav" ).append( "<li id='tabNav-" + sn +"'><a href='#tabs-"+ sn + "'>货柜" + sn + "</a></li>" );
    tabs.tabs( "refresh" );
    selectTab("tabs-" + sn);
}