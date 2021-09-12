//declaration area
const max_supply  = {
    coffee: 1000,
    milk : 1000,
    watter : 500,
    chocolate : 300
};

var supply  = {
    coffee: 1000,
    milk : 1000,
    watter : 500,
    chocolate : 300
};

var sum_order ={
    Expresso : 0,
    Latte : 0,
    Americano :0,
    Mocha : 0,
    Flat_White: 0,
    Cappucino : 0,
    Long_Black : 0,
    Noisette : 0,
    Marocchino : 0 
};

var consume_supply ={
    coffee: 0,
    milk : 0,
    watter : 0,
    chocolate : 0
};

var table_status = [];

$( document ).ready(function() {
    init_table();
    init_progress_bar();
});


$('.btn.btn-outline-primary.btn-supplay').click(function(){
    console.log($(this).attr('btn-fill'));
    var fill_type =$(this).attr('btn-fill');

   console.log (parseInt($('#input-fill-'+ fill_type).val()));
   console.log(max_supply[fill_type]);
    if ( parseInt($('#input-fill-'+ fill_type).val()) + supply[fill_type] <= max_supply[fill_type]) {
        supply[fill_type] += parseInt($('#input-fill-'+ fill_type).val());
    } else{
        Swal.fire( fill_type + ' is full');
    }
    $('#input-fill-'+ fill_type).val('0');
    init_progress_bar();
    init_btn_mch();
    setTimeout(remove_active,500,this);
});

$('.btn-lg.btn-outline-primary.bt-menu-mch').click(function(){
    var btn_mch =$(this).attr('btn-coffe');
    var ord_qty = $('#input-order-qty').val();
    if( 
        (ord_qty*indegrideance[btn_mch].coffee) <= supply.coffee && 
        (ord_qty*indegrideance[btn_mch].milk) <= supply.milk && 
        (ord_qty*indegrideance[btn_mch].watter) <= supply.watter &&
        (ord_qty*indegrideance[btn_mch].watter) <= supply.chocolate
    ){
        console.log(btn_mch);
        sum_order[btn_mch] += ord_qty*1;
        consume_supply.coffee += ord_qty * indegrideance[btn_mch].coffee;
        consume_supply.milk += ord_qty * indegrideance[btn_mch].milk_s;
        consume_supply.milk += ord_qty * indegrideance[btn_mch].milk_f;
        consume_supply.watter += ord_qty * indegrideance[btn_mch].watter;
        consume_supply.chocolate += ord_qty * indegrideance[btn_mch].chocolate;

        supply.coffee -= ord_qty * indegrideance[btn_mch].coffee;
        supply.milk -= ord_qty * indegrideance[btn_mch].milk_s;
        supply.milk -= ord_qty * indegrideance[btn_mch].milk_f;
        supply.watter -= ord_qty * indegrideance[btn_mch].watter;
        supply.chocolate -= ord_qty * indegrideance[btn_mch].chocolate;

        //console.log(supply);
        //console.log(sum_order);
        $('#sum-order').bootstrapTable('removeAll');
        $('#sum-order').bootstrapTable('load',pre_data_table_order());
        $('#table-consume').bootstrapTable('removeAll');
        $('#table-consume').bootstrapTable('load',pre_data_table_consume() );
        init_btn_mch();
        init_progress_bar();
        //$('#display-status').bootstrapTable('removeAll');
        $('#display-status').bootstrapTable('load',table_status );
        $('#input-order-qty').val(1);
    } else {
         $('#display-status').bootstrapTable('removeAll');
         table_status.push({status: "can't order " + ord_qty + " " + btn_mch.replace("_"," ") + " not enough indegrideance"});
         $('#display-status').bootstrapTable('load',table_status );
    }
    setTimeout(remove_active,500,this);
});



//general function
function init_table(){ 
    $('#sum-order').bootstrapTable({
        columns: [{
          field: 'id',
          title: '#'
        }, {
          field: 'item',
          title: 'Item Name'
        }, {
          field: 'qty',
          title: 'Qty'
        }],
        data: [
            {
                id :1,
                item : 'Expresso',
                qty : sum_order.Expresso , 
            },
            {        
                id :2,
                item : 'Latte',
                qty : sum_order.Latte , 
            },
            {
                id :3,
                item : 'Americano',
                qty : sum_order.Americano , 
            },
            {
                id :4,
                item : 'Mocha',
                qty : sum_order.Mocha , 
            },
            {
                id :5,
                item : 'Flat White',
                qty : sum_order.Flat_White , 
            },
            {
                id :6,
                item : 'Cappucino',
                qty : sum_order.Cappucino , 
            },
            {
                id :7,
                item : 'Long Black',
                qty : sum_order.Long_Black , 
            },
            {
                id :8,
                item : 'Noisette',
                qty : sum_order.Noisette , 
            },
            {
                id :9,
                item : 'Marocchino',
                qty : sum_order.Marocchino , 
            }
        ]
    });
    $('#table-consume').bootstrapTable({
        columns: [
            {
            field: 'id',
            title: '#'
          }, {
            field: 'item',
            title: 'Item Name'
          }, {
            field: 'qty',
            title: 'ml'
          }],
          data:[
            {
                id :1,
                item : 'coffee',
                qty : consume_supply.coffee , 
            },
            {        
                id :2,
                item : 'milk',
                qty : consume_supply.milk , 
            },
            {
                id :3,
                item : 'watter',
                qty : consume_supply.watter , 
            },
            {
                id :4,
                item : 'chocolate',
                qty : consume_supply.chocolate , 
            }
        ]
    });
    $('#display-status').bootstrapTable({
        columns: [
            {
            field: 'status',
            title: 'status'
          }],
          data:[]
        });
}

function pre_data_table_order (){
    var data = [
        {
            id :1,
            item : 'Expresso',
            qty : sum_order.Expresso , 
        },
        {        
            id :2,
            item : 'Latte',
            qty : sum_order.Latte , 
        },
        {
            id :3,
            item : 'Americano',
            qty : sum_order.Americano , 
        },
        {
            id :4,
            item : 'Mocha',
            qty : sum_order.Mocha , 
        },
        {
            id :5,
            item : 'Flat White',
            qty : sum_order.Flat_White , 
        },
        {
            id :6,
            item : 'Cappucino',
            qty : sum_order.Cappucino , 
        },
        {
            id :7,
            item : 'Long Black',
            qty : sum_order.Long_Black , 
        },
        {
            id :8,
            item : 'Noisette',
            qty : sum_order.Noisette , 
        },
        {
            id :9,
            item : 'Marocchino',
            qty : sum_order.Marocchino , 
        }
    ];
    return data;
}


function pre_data_table_consume (){

    var data = [
        {
            id :1,
            item : 'coffee',
            qty : consume_supply.coffee , 
        },
        {        
            id :2,
            item : 'milk',
            qty : consume_supply.milk , 
        },
        {
            id :3,
            item : 'watter',
            qty : consume_supply.watter , 
        },
        {
            id :4,
            item : 'chocolate',
            qty : consume_supply.chocolate , 
        }
    ];
    return data;
}

function init_btn_mch() {
    $('#display-status').bootstrapTable('removeAll');
    Object.keys(indegrideance).forEach(key => {
        var btn_name = key;
        console.log(key);        // the name of the current key.
        obj_my =indegrideance[key]
        var disable_btn = true;
            Object.keys(obj_my).forEach(key => {
                //console.log(key);        
                //console.log(obj_my[key]); 
                //console.log(supply[key]);
                if( obj_my[key]>0 && supply[key] < obj_my[key] ) {
                    disable_btn = false;
                    // console.log(key);        
                    // console.log(obj_my[key]); 
                    // console.log(supply[key]);
                }
            });
        console.log (btn_name + ' will be ' + disable_btn );
        $('#btn-mch-'+btn_name ).prop('disabled', !disable_btn);
        if ( !disable_btn ) {        
            table_status.push({status: btn_name.replace('_',' ') +' is out of order please fill the indegrideance'});
        }
    });
}