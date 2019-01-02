import React from 'react'; 

const AddItem = (props) => {
    console.log(props)

    // let newItem = {
    //     product: {
    //       id: 40,
    //       name: 'Mediocre Iron Watch',
    //       priceInCents: 399
    //     },
    //     quantity: 1
    //   }

    return (
        <div className="container">
        <form onSubmit={props.addItem}>  
        <div className="form-group">
            <label for="exampleInputEmail1">Quantity</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Quantity" onChange= {props.update}/>
        <div class="form-group">
            <label for="exampleFormControlSelect1">Select</label>
            <select onChange={props.updateName} class="form-control" id="exampleFormControlSelect1">
            <option>
                {/* {key= {idx}} */}
            </option>
            {props.products.map(product => <option key={product.id}>{product.name}</option>)}
            </select>
        </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit
        </button>
        </form>
        </div>
    );

}

export default AddItem



