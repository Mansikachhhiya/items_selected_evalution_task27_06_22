// function deleteRow(btn) {


//   var row_count = table.rows.length;
//   if (row_count > 2) {
//     var row = btn.parentNode.parentNode;
//     row.parentNode.removeChild(row);
//   }
// }

// function addNewRow() {
//   var row_count = table.rows.length;

//   if (row_count < 4) {
//     $("#tbody").append('<tr><td><select name="itemselect1" id="itemselect1" class="drop_dowm"><option value="Item1">Item1</option><option value="Item2">Item2</option><option value="Item3">Item3</option></select></td><td><button type="submit" id="delete_btn" value="Submit" class="delete_class" onclick="deleteRow(this)">X</button> </td></tr>')

//   }
// }
var count=1;
$('#add_btn').click(function(){

  let row = $(this).siblings('#table').children().children().children().children('#row1').html();
  let rowCount = $('#table tr').length
  if(rowCount < 4){
      count++
      $('#table').append(`<tr id="row${count}">'<td><select name="itemselect" id="itemselect" class="drop_dowm"><option value="Item1">Item1</option><option value="Item2">Item2</option><option value="Item3">Item3</option></select></td><td><button type="submit" id="delete_btn" value="Submit" class="delete_class">X</button></td>'</tr>`);
      // now we will change the id of the created id so that we can access it
      $(`#row${count}`).children().children('select').attr('id',`selector${count}`)
      $(`#row${count}`).children().children('button').attr('id',`delete_btn${count}`)
      $(`#row${count}`).children().children('button').attr('class',`delete_but new`)

  }
  $('.delete_but').click(function(){
    if($(this).attr('class') === 'delete_but new'){
        $(this).parent().parent().remove();
    }
});
});



$(document).ready(function() {

  var selectedList = [];

  Array.prototype.equals = function(array) 
  {

    // if the other array is a falsy value, return

    if (!array)
      return false;


    // compare lengths - can save a lot of time 

    if (this.length != array.length)
      return false;



    for (var i = 0, l = this.length; i < l; i++) {

      // Check if we have nested arrays

      if (this[i] instanceof Array && array[i] instanceof Array) {

        // recurse into the nested arrays

        if (!this[i].equals(array[i]))
          return false;

      } else if (this[i] != array[i]) {

        // Warning - two different object instances will never be equal: {x:20} != {x:20}

        return false;

      }

    }

    return true;

  }

  function updateSelectedList() {

    selectedList = [];

    var selectedValue;

    $('.drop_dowm').each(function() {

      selectedValue = $(this).find('option:selected').text();

      if (selectedValue != "" && $.inArray(selectedValue, selectedList) == "-1") {

        selectedList.push(selectedValue);

      }
      

    });

  }



  //disable the dropdown items that have already been selected

  function disableAlreadySelected() {

    $('option').each(function() {

      if ($.inArray(this.value, selectedList) != "-1") {

        $(this).attr("disabled", true);

      } else {

        $(this).attr("disabled", false);

      }

    });
  }

  
  $('#table').on('click', '.drop_dowm', function() {

    setTimeout(function() {

      updateSelectedList();

      disableAlreadySelected();

    }, 0);

  });



  //when a new table row is added, disable the dropdown options that have already been selected

  $('#table #add_btn').on('click', disableAlreadySelected);
  
});





// $(document).on('click','#itemselect',function(event){
//     if($('#itemselect').val()=="Item1"){
//       $('#table').children().children().children().children('#itemselect1').children('option[value="Item1"]').attr("disabled","disabled");
         
//     }
//     else if($('#itemselect').val()=="Item2"){
//       $('#table').children().children().children().children('#itemselect1').children('option[value=Item2]').attr("disabled","disabled");
//     }
//     else{
//       $('#table').children().children().children().children('#itemselect1').children('option[value=Item3]').attr("disabled","disabled");
//     }
    // if($('#itemselect1').val()=="Item1"){
    //   $('#table').children().children().children().children().children('option[value=Item1]').attr("disabled","disabled");
    // }
    // if($('#itemselect1').val()=="Item2"){
    //   $('#table').children().children().children().children().children('option[value=Item2]').attr("disabled","disabled");
    // }
    // if($('#itemselect1').val()=="Item3"){
    //   $('#table').children().children().children().children().children('option[value=Item3]').attr("disabled","disabled");
    // }
    // if($('#itemselect').val()=="Item1" && $('#itemselect1').val()=="Item3"){
    //   $('#table').children().children().children().children().children('option[value=Item3]').attr("disabled","disabled");
    //   // $('#table').children().children().children().children("#itemselect1").children('option[value=Item1]').attr("disabled","disabled");
    // }
    // if($('#itemselect').val()=="Item1" && $('#itemselect1').val()=="Item2"){
    //   $('#table').children().children().children().children().children('option[value=Item1]').attr("disabled","disabled");
    // }
    // if($('#itemselect1').val()=="Item2" && $('#itemselect').val()=="Item3"){
    //   $('#table').children().children().children().children().children('option[value=Item2]').attr("disabled","disabled");
    // }
    
// })
