class Matrix3D {
    constructor(){
        this.space = [];
        this.size = 32;
        this.position = []
    }

    load(x, y, z){

        const position = {
            x:50,
            y:50,
            z: z*y
        } ;

        let increment = {
            x: 0,
            y: 0
        };

        
        for(let w=0; w<x; w++){
            
            this.space[w] = [];
            this.position[w] = [];
            for(let h=0; h<y; h++){
                
                this.space[w][h] = [];
                this.position[w][h] = [];

                for(let b=0; b<z; b++){
                   
                    this.space[w][h][b] = false;

                    if(b === 0) {
                        increment.x = 0;
                        increment.y = 0; 
                    }else
                    { 
                        increment.x = 6;
                        increment.y = 1;
                    }

                    this.position[w][h][b] = {
                        x: position.x ,
                        y: position.y ,
                        z: position.z
                    };

                    position.z--;
                }  

                position.y+=this.size / 2 ;
                
            }

            position.x+=this.size / 2 - 6 ;
            position.y=50 + 6;
            position.z=z*y;
        }
    }

    empty(x, y, z) {
        this.space[x][y][z] = false;
    }

    fill(x, y, z) {
        this.space[x][y][z] = true;
    }
}

export default Matrix3D;