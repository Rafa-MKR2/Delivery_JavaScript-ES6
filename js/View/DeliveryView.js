

	class DeliveryView extends View{

	constructor(elemento){
		super(elemento);
	}


	template(model){

		return `
		
		<table class=" table table-hover table-bordered">
		<thead>
			<tr>
			<th>Data</th>
			<th>Nome</th>
			<th>Quantidade</th>
			<th>Valor</th>
			</tr>
			</thead>
		<tbody>
			${model.lista.map( (model) => {
				return `
				<tr>
				<td>${DateHelper.dataParaTexto(model.data)}</td>
				<td>${model.nome}</td>
				<td>${model.quantidade}</td>
				<td>$${model.valor}.00</td>
				</tr>

				`
			})
		}
		</tbody>
	</table>

		`;
	}

	

	}