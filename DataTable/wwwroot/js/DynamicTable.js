
$(function () {


    var listofData = [
        { Id: 1, Name: "Abir",Price:1000 },
        { Id: 2, Name: "Suvo", Price: 2000 },
        { Id: 3, Name: "Billal", Price: 2000},
    ];



    //for (var i = 0; i < listofData.length; i++) {
    //    var td = tdArray;
    //    tr = `<tr>
    //           <td>${listofData[i].Id}</td>
    //          <td>${listofData[i].Name}</td>
    //         </tr>`;
    //    $("#tableDataLoad").append(tr);
    //}
    //$.each(listofData, function (index, item) {
    //    var row = $('<tr>');
    //    row.append($('<td>').text(item.Id));
    //    row.append($('<td>').text(item.Name));
    //   // tbody.append(row);
    //    $("#tableDataLoad").append(row);
    //});
   
    //$.each(listofData, function (index, record) {
    //   var row = $('<tr></tr>');

    //    $.each(record, function (i, cellValue) {
    //        var rowData = $(`<td id="editBtn" value="${cellValue}"></td>`).text(cellValue);
    //        row.append(rowData);
    //    });
     
    //    $("#tableDataLoad").append(row);
    //});

   // $("#editBtn:last-child").css("color", "#66a3ff");
    var totalPrice = 0;
    for (var i = 0; i < listofData.length; i++) {
        totalPrice += listofData[i].Price;
        var tr = `<tr>
               <td>${listofData[i].Id}</td>
               <td>${listofData[i].Name}</td>
               <td style="text-align:right">${listofData[i].Price}</td>
              <td style="text-align:right" >
                <button type="button"  id="editBtn" value="${listofData[i].Id}" class="btn btn-info show-button">Info</button></td>
                
             </tr>`;
        $("#tableDataLoad").append(tr);
       
    }
    $("#TotalValue").append(totalPrice);
    var modalList = [];
    //$("#tableDataLoad").on('click', '#editBtn', function () {

    //    $("#modalListData").empty();
   
    //    var Id = $(this).attr("value");
    //    var TempId = Number(Id);
    //    $(".modal").modal('show');
    //    listofData.forEach(function (aData,index) {
    //        if (aData.Id == TempId) {
    //            var tr = `<tr>
    //               <td>${aData.Id}</td>
    //               <td>${aData.Name}</td>
    //               <td style="text-align:right">${aData.Price}</td>
    //             </tr>`;
    //            $("#modalListData").append(tr);
    //        }
    //    })
    //});


    $(".show-button").hover(
        function () {
            // Show the hidden div when hovering over the button's parent (td)
            //toogleDataShow
            $(".toogleDataShow").empty();
            var Id = $(this).attr("value");
            var TempId = Number(Id);
            var card = '';
            $(this).parent().append(`<div class="hidden-div toogleDataShow" ></div>`);
               $.each(listofData, function (index, item) {
                   if (item.Id == TempId) {
                       card = `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <p class="card-text">Id: ${item.Id}</p>
                                <p class="card-text">Name: ${item.Name}</p>
                            </div>
                            </div>`;
                       $(".toogleDataShow").append(card);
                   }

               });
            
        },
        function () {
           
            $(this).parent().find(".hidden-div").remove();
        }
    );


 
});