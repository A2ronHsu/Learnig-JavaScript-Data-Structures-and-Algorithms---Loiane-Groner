function knapSack(capacity, weights, values){
    const n = values.length;
    let load = 0;
    let val = 0;
    for( let i = 0; i < n && load <capacity; i++){
        if(weight[i] <= capacity -  load){
            val+=values[i];
            load+=weights[i];
        }else{
            const r = (capacity -load) / weights[i];
            val+= r*values[i];
            load+=weights;
        }
    }
    return val;
}

