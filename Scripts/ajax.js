var serverUrl = "http://127.0.0.1:4000/api/v1";

function ajaxGetAllEquipments()
{
    var json = [];
    $.ajax({
        type: "GET",
        url: serverUrl + "/equipments",
        dataType: 'json',
        async: false,
        crossDomain: true,
        success: function(result){
            if(200 == result.code)
            {
                json = result.data;
            }
        },
        error: function(err){
            json = err;
        }
    });
    return json;
}

function ajaxGetEquStatus(sn)
{
    var json = [];
    $.ajax({
        type: "GET",
        url: serverUrl + "/equipments/"+sn+"/status",
        dataType: 'json',
        async: false,
        success: function(result){
            if(200 == result.code)
            {
                json = result.data;
            }
        },
        error: function(err){
            json = err;
        }
    });
    return json;
}

function ajaxAddEqu(sn, reader_ipport, equ_ipport, vms_no)
{
    /*
    http://{{server}}{{api}}/equipments/add
    {
        "equ_sn": "3333",
        "equ_no": 3,
        "equ_ip": "192.168.17.23",
        "equ_port": 8000,
        "reader_ip": "192.168.17.23",
        "reader_port": 8001,
        "desp": ""
    }
    */
    
    var postData = {
        "equ_sn": sn,
        "equ_no": vms_no,
        "equ_ip": equ_ipport.split(':')[0],
        "equ_port": parseInt(equ_ipport.split(':')[1]),
        "reader_ip": reader_ipport.split(':')[0],
        "reader_port": parseInt(reader_ipport.split(':')[1]),
        "desp": ""
    };
    $.ajax({
        type: "POST",
        url: serverUrl + "/equipments/add",
        data: JSON.stringify(postData),
        dataType: 'json',
        async: false,
        success: function(result){
            console.log(result);
        },
        error: function(err){
            console.log(err);
        }
    });
}

function ajaxUpdateEqu(sn, reader_ipport, equ_ipport, vms_no)
{
    //POST http://{{server}}{{api}}/equipments/111111/update
    var postData = {
        "equ_sn": sn,
        "equ_no": vms_no,
        "equ_ip": equ_ipport.split(':')[0],
        "equ_port": parseInt(equ_ipport.split(':')[1]),
        "reader_ip": reader_ipport.split(':')[0],
        "reader_port": parseInt(reader_ipport.split(':')[1]),
        "desp": ""
    };
    $.ajax({
        type: "POST",
        url: serverUrl + "/equipments/"+sn+"/update",
        data: JSON.stringify(postData),
        dataType: 'json',
        async: false,
        success: function(result){
            console.log(result);
        },
        error: function(err){
            console.log(err);
        }
    });
}

function ajaxDeleteEqu(sn)
{
    //POST http://:server:api/equipments/1/delete
    $.ajax({
        type: "POST",
        url: serverUrl + "/equipments/"+sn+"/delete",
        dataType: 'json',
        async: false,
        success: function(result){
            console.log(result);
        },
        error: function(err){
            console.log(err);
        }
    });
}