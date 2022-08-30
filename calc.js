function displaynum(num)
{
result.value+=num
}
function allClear()
{
    result.value=''
}
function evaluatef()
{
//  exp=result.value 
//  out=eval(exp)
//  result.value=out  
result.value= eval(result.value)
}
function rem()
{
    e=result.value
    result.value=e.slice(0,-1)
    // result.value=result.value.slice(0,-1)
}