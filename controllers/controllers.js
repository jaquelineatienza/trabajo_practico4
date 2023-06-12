function get(req,res){
    res.send('get');
}
function post(req,res){
    res.send('POST');

}
function put(req,res){
    res.send('PUT');

}
function delet(req,res){
    res.send('delete');
}
module.exports={
    get,
    post,
    put,
    delet
}