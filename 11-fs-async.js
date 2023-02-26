const {readFile, writeFile} = require('fs')


console.log('start')

readFile('./content/subfolder/test.txt' , 'utf-8' , (err, result) => {
    if(err) {
        console.log(err)
        return;
    }
    const frist = result
    readFile('./content/secondtest.txt', 'utf-8', (err, result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second = result
        writeFile(
            './content/result-sync.txt',
            `Here is the rsult : ${frist}, ${second}`,
            (err,result) =>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('done woth this task')
            }
        )
    }) 
})


console.log('starting another task')



