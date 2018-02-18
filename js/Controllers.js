
	class controllers{

		constructor(){
		// Captura do dados formulário 
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputNome = $('#nome');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor'); 

		// Atualização da View
		this._listaItens = new ListaItens();
		this._tabelView = new DeliveryView($('#DeliveryView'));	
		this._tabelView.update(this._listaItens);
		
		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemView'));
		this._mensagemView.update(this._mensagem);
		
		}

		adiciona(event){
			event.preventDefault();	
			
			this._listaItens.adicionaLista(this._criarDelivery());
			
			this._mensagem.texto = 'Pedido Efetuado com sucesso!';
			this._mensagemView.update(this._mensagem);
			this._tabelView.update(this._listaItens);
			this._tabelView.update(this._listaItens);
			this._limpaFormulario();

		} 

		_criarDelivery(){
			return new Delivery(
				new Date(DateHelper.textoParaData(this._inputData.value)),
					this._inputNome.value,
					this._inputQuantidade.value,
					this._inputValor.value,
					this._inputValor.value

				);
		}

		_limpaFormulario(){

			this._inputData.value = '';
			this._inputNome.value = '';
			this._inputQuantidade.value = '';
			this._inputValor.value = '';
			this._inputData.focus();

		}

	}