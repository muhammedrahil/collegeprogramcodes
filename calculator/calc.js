function clik( val){
    document.getElementById("rahil").value+=val

}
function cli()
{
    document.getElementById("rahil").value=""
}
function clir()
{
    var result=document.getElementById("rahil").value
    var ext=eval(result)
    document.getElementById("rahil").value=ext
}