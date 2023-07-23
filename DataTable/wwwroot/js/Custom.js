var input = [{ Id: 1, Contact: 'aa' },
{ Id: 2, Contact: 'bb' },
{ Id: 3, Contact: 'cc' }]

$('#loadDataTable').DataTable({
    "aaData": input,
    "columns": [

        { "data": "Id" },
        //{ "data": "Contact" },
        { "data": "Contact" },
        {
            "data": 'Action',
            "render": function (data, type, full) {
                return `<button type="button" class="btn btn-primary editBtn text-center" value='${full.Id}'>Edit</button>`
            }
        }

    ]
});

var list = [];
var tempList = [];
$(".editBtn").click(function (e) {
    $("#DetailsList").empty();
    $("#EditTableBtn").empty();
  
    list = [];
    debugger;
    var id = $(this).val();
    var temp = Number(id);
    console.log(id);
    input.forEach(function (aData, index) {
        if (aData.Id == temp) {
            list.push(aData);
        }
    });


    // $(".modal").modal('show');
    //for (var i = 0; i < list.length; i++) {
    //    var li = `<ul>
    //      <li>${list[0].Id}</li>
    //      <li>${list[0].Contact}</li>
    //    </ul>`;
    //    $("#DetailsList").append(li);
    //}

    //$("#EditTable").click(function (e) {

    //});

    //var tr = "";
    //tr = `<tr>
    //    <th scope="row">1</th>
    //    <td>Mark</td>
    //    <td>Otto</td>
    //    <td>@mdo</td>
    //  </tr>`;

    for (var i = 0; i < list.length; i++) {
        var tr = `<tr>
          <th >${list[i].Id}</th>
          <td>${list[i].Contact}</td>
         <td><button type="button" id="editBtn" value='${list[i].Id}' class="btn btn-primary">Edit</button></td>
        </tr>`;
        $("#EditTable").append(tr);
    }


});

$("#EditTable").on('click', '#editBtn', function () {
    debugger;
    $("#contactInfo").val('');
    $("#conId").val('');
    var id = $(this).val();
    var tempId = Number(id);
   

    list.forEach(function (aData,index) {
        if (aData.Id==tempId) {
            $("#contactInfo").val(aData.Contact);
            $("#conId").val(aData.Id);
        }
    })
   
});

function TableFunction() {

}

$("#addBtn").click(function () {
    var contarct= $("#contactInfo").val();
    var conId = Number($("#conId").val());
    tempList = [];
    list.forEach(function (aData, index) {
        if (aData.Id != conId) {
            var obj = {};
            obj.Id = conId;
            obj.Contact = contarct;
            tempList.push(obj);
        }
    });
    for (var i = 0; i < tempList.length; i++) {
            var tr = `<tr>
            <th >${tempList[i].Id}</th>
            <td>${tempList[i].Contact}</td>
            <td><button type="button" id="editBtn" value='${tempList[i].Id}' class="btn btn-primary">Edit</button></td>
            </tr>`;
            $("#EditTable").append(tr);
    }
}); 