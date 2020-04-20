//绘制基础界面



var AntennaList = [
    {
      "equ_no": 2,
      "antenna_no": 1,
      "enabled": false,
      "active": false,
      "label_num": 0,
      "data": "",
      "desp": ""
    },
    {
      "equ_no": 2,
      "antenna_no": 2,
      "enabled": false,
      "active": false,
      "label_num": 0,
      "data": "",
      "desp": ""
    },
    {
      "equ_no": 2,
      "antenna_no": 3,
      "enabled": false,
      "active": false,
      "label_num": 0,
      "data": "",
      "desp": ""
    },
    {
      "equ_no": 2,
      "antenna_no": 4,
      "enabled": false,
      "active": false,
      "label_num": 0,
      "data": "",
      "desp": ""
    },
    {
      "equ_no": 2,
      "antenna_no": 5,
      "enabled": false,
      "active": false,
      "label_num": 0,
      "data": "",
      "desp": ""
    },
    {
      "equ_no": 2,
      "antenna_no": 6,
      "enabled": false,
      "active": false,
      "label_num": 0,
      "data": "",
      "desp": ""
    },
    {
      "equ_no": 2,
      "antenna_no": 7,
      "enabled": false,
      "active": false,
      "label_num": 0,
      "data": "",
      "desp": ""
    },
    {
      "equ_no": 2,
      "antenna_no": 8,
      "enabled": false,
      "active": false,
      "label_num": 0,
      "data": "",
      "desp": ""
    }
  ];


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
function newEquipmentTab(tabid){
    //newBinditem('12', '192.168.10.41', '192.168.10.42', '345');
    

    var html = '';

    html += '<div id="'+tabid+'">';
    for(var i=1; i<=8; i++){
        html += newAntenna(i, true, false, i*2);
    }
    html += '</div>';
    
    /*
    html += '<div id="'+tabid+'">';
    html +=     '<div class="row">';
    html +=         '<div class="column" style="background-color:#aaa;">';
    html +=             '<h2>货架 1</h2>';
    html +=             '<p>Some text..</p>';
    html +=         '</div>';
    html +=         '<div class="column" style="background-color:#bbb;">';
    html +=             '<h2>货架 2</h2>';
    html +=             '<p>Some text..</p>';
    html +=         '</div>';
    html +=     '</div>';

    html +=     '<div class="row">';
    html +=         '<div class="column" style="background-color:#ccc;">';
    html +=             '<h2>货架 3</h2>';
    html +=             '<p>Some text..</p>';
    html +=         '</div>';
    html +=         '<div class="column" style="background-color:#ddd;">';
    html +=             '<h2>货架 4</h2>';
    html +=             '<p>Some text..</p>';
    html +=         '</div>';
    html +=     '</div>';

    html +=     '<div class="row">';
    html +=         '<div class="column" style="background-color:#aaa;">';
    html +=             '<h2>货架 5</h2>';
    html +=             '<p>Some text..</p>';
    html +=         '</div>';
    html +=         '<div class="column" style="background-color:#bbb;">';
    html +=             '<h2>货架 6</h2>';
    html +=             '<p>Some text..</p>';
    html +=         '</div>';
    html +=     '</div>';

    html +=     '<div class="row">';
    html +=         '<div class="column" style="background-color:#ccc;">';
    html +=             '<h2>货架 7</h2>';
    html +=             '<p>Some text..</p>';
    html +=         '</div>';
    html +=         '<div class="column" style="background-color:#ddd;">';
    html +=             '<h2>货架 8</h2>';
    html +=         '<p>Some text..</p>';
    html +=     '</div>';
    html += '</div>';
    */

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

//根据传过来的数据动态的更新界面
function updateEquipmentTab(tabobject,data){
}