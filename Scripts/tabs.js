//绘制基础界面
function newAntenna(num, active, enabled, count){
    var html = '';
    if(1 == num%2){
        html += '<div class="row">';
    }
    html += '<div antenna_no="'+num+'" class="column index'+(num%4)+'">';
    html +=     '<div class="column-head">货架 '+num+'</div>';
    html +=     '<div class="column-body">';
    html +=         '<table class="rfid-table">';
    html +=             '<thead><th>键</th><th>值</th><th>说明</th></thead>';
    html +=             '<tbody>';
    html +=                 '<tr>';
    html +=                     '<td>Active</td>';
    html +=                     '<td class="'+(active?'istrue':'isfalse')+'">'+active+'</td>';
    html +=                     '<td>是否已启用</td>';
    html +=                 '</tr>';
    html +=                 '<tr>';
    html +=                     '<td>Enable</td>';
    html +=                     '<td class="'+(enabled?'istrue':'isfalse')+'">'+enabled+'</td>';
    html +=                     '<td>当前是否可用</td>';
    html +=                 '</tr>';
    html +=                 '<tr>';
    html +=                     '<td>RFID Count</td>';
    html +=                     '<td>'+count+'</td>';
    html +=                     '<td>RFID数量</td>';
    html +=                 '</tr>';
    html +=             '</tbody>';
    html +=         '</table>';
    html +=     '</div>';
    html += '</div>';

    if(0 == num%2){
        html += '</div>';
    }
    return html;
}
function newEquipmentTab(sn){
    var tabid = "tabs-" + sn;
    var equStatus = ajaxGetEquStatus(sn);

    var html = '';
    html += '<div class="rfid-panels" id="'+tabid+'">';
    for(var i=0; i<equStatus.length; i++){
        html += newAntenna(equStatus[i].antenna_no, equStatus[i].active, equStatus[i].enabled, equStatus[i].label_num);
    }
    html += '</div>';
    
    return  html;
}

function selectTab(tabID){
    var lies = $( "#tabs" ).find( ".ui-tabs-nav li" );
    for(var i = 0; i < lies.length; i++){
        if($(lies[i]).hasClass("ui-tabs-active ui-state-active")){
            $(lies[i]).removeClass("ui-tabs-active ui-state-active")
        }
        if($(lies[i]).attr("aria-controls") == tabID){
            $( "#tabs" ).tabs( "option", "active", i );
        }
    }
}
