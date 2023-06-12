async function get(req,res){
    res.send('get');
}
async function post(req,res){
    res.send('POST');

}
async function put(req,res){
    res.send('PUT');

}
async function delet(req,res){
    res.send('delete');
}
module.exports={
    get,
    post,
    put,
    delet
}