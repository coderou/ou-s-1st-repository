//代码卡片:1.13(mongoose操作数据库)
;(async function(){
  const mongoose=require('mongoose')
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/coderou',{ useNewUrlParser:true, useUnifiedTopology:true})
    console.log('数据库链接成功')
    const Schema=mongoose.Schema({
      id:{type:Number,required:true,unique:true},
      name:{type:String,required:true,defalut:'未定义名字'}
    })
    const model=mongoose.model('model',Schema)
    const person1=new model({id:001,name:'沸羊羊'})
    await person1.save()
    await model.create({id:002,name:'喜羊羊'})
    const re1=await model.find({name:'喜羊羊'},{name:1,_id:0})
    console.log(re1)
  }catch(err){
    console.log('数据库链接失败',err)
  }
})()






/*  */
