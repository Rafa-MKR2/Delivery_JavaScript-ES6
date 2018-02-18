	

	class Delivery{

		constructor(data,nome, quantidade){

			this._data = new Date(data.getTime());
			this._nome = nome;
			this._quantidade = quantidade;
			this._Valor = this._quantidade * 5.00;
			Object.freeze(this);
		}

		get data(){

			return this._data;

		}

		get nome(){

			return this._nome;

		}

		get quantidade(){

			return this._quantidade;

		}

		get valor(){

			return this._Valor;

		}
	}