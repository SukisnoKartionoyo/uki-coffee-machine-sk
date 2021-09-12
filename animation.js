// animation function
function remove_active(selectore){
    $(selectore).removeClass('active');
}

function init_progress_bar (){
    Object.keys(supply).forEach(key => {
        console.log(key); 
        console.log(max_supply[key]);
        var prg_percent = Math.round( (supply[key] / max_supply[key] ) * 100) + '%';
        var prg_value = supply[key];
        $('#progress-'+key).css('width', prg_percent ).attr('aria-valuenow', prg_value).text(prg_value);
    });
}