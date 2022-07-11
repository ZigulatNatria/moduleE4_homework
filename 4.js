const Device = function (amper, volt, cost){
    this.amper = amper;
    this.volt = volt;
    // this.status = status;
    this.onOff = false;
    this.cost = cost
}

Device.prototype.getPrice = function(){
    return(`Стоимость ${this.cost}$`)
}

Device.prototype.getElectric = function(){
    let electric = this.amper * this.volt;
    return(`Потребляемая электроэнергия равна ${electric} кВт/ч`)
}



Device.prototype.getOff = function(){
    this.onOff = false
    return(`Статус подключения устройства к сети ${this.onOff}`)
}

Device.prototype.getOn = function(){
    this.onOff = true
    return(`Статус подключения устройства к сети ${this.onOff}`)
}

const Computer = function(processor, ram, hardDrive, videoCard, amper, volt, cost) {
    this.processor = processor;
    this.ram = ram;
    this.hardDrive = hardDrive;
    this.videoCard = videoCard;
    this.amper = amper;
    this.volt = volt;
    this.cost = cost
    // this.status = status;

}

Computer.prototype = new Device();

Computer.prototype.getInfo = function (){
    return(`Системный блок:\n ${this.processor}\nОперативная память ${this.ram}Mb\nОбъём жёсткого диска ${this.hardDrive}T\nВидеокарта ${this.videoCard}`)
}

const Guitar = function(name, volume, amper, volt, cost){
    this.name = name;
    this.volume = volume;
    this.amper = amper;
    this.volt = volt;
    // this.status = status;
    this.cost = cost
}

Guitar.prototype = new Device();

Guitar.prototype.getInfo = function (){
    console.log(`Гитара ${this.name}`)

    if(this.volume < 1){
        return(`Текущий уровень громкости ${this.volume} это очень тихо`)
    }
    else {
        return(`Текущий уровень громкости ${this.volume} соседи оценили )))))))`)
    }
}


let comp1 = new Computer('IntelCor I7', '8000', '10', 'GeForce GTX760', 70, 20, 500);
let guitar1 = new Guitar('Gibson', 1000, 100, 10, 1000);

console.log(guitar1.getInfo());
console.log(guitar1.getPrice());
console.log(guitar1.getElectric());
console.log(guitar1.getOn());
console.log(guitar1.getOff());
console.log('-------------------------------------------------------------------------');
console.log(comp1.getInfo());
console.log(comp1.getPrice());
console.log(comp1.getElectric());
console.log(comp1.getOn());
console.log(comp1.getOff());