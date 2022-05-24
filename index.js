const sharp = require("sharp");

const side = 40;

img = [];
async function resizeImage() {
    try {
      data = await sharp("jobs.jpg")
        .resize({
          width: side,
          height: side
        })
        .grayscale()
        .raw()
        .toBuffer();
        data = [...data];
        let newArr = [];
        while(data.length) newArr.push(data.splice(0,side));
        data = newArr;
        // console.log(data);

        for(let i=0; i<side; i++){
            for(let j=0; j<side; j++){
                if(data[i][j] < 50) process.stdout.write('. ');
                else if(data[i][j] < 100) process.stdout.write('" ');
                else if(data[i][j] < 150) process.stdout.write('n ');
                else if(data[i][j] < 200) process.stdout.write('1 ');
                else if(data[i][j] < 230) process.stdout.write('U ');
                else process.stdout.write('8 ');
                // process.stdout.write("0 ");
            }
            process.stdout.write("\n");
        }
        // setTimeout(()=>{
        //     console.clear();
        // }, 2000)
        
    } catch (error) {
      console.log(error);
    }
  }
  
  resizeImage();