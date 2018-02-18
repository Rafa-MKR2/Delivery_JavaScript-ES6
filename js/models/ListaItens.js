	
	class ListaItens{

		constructor(){
		
		this._listaItem = [];

		}


		get lista(){

		return [].concat(this._listaItem);

		}

		adicionaLista(item){

			this._listaItem.push(item);
		}


	}