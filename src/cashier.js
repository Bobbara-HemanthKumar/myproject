import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './cashier.css';
export default function Cashier(){

    const sub = () =>{
        alert('Details Submitted Successfully');
    }
    const upu = () =>{
        alert('Bill Upload successfully');
    }
    return(
        <>
        <div className='container' align='center'>
            <form className='form-label'>
                <div id='heading'>
                <h4 align='center' style={{fontSize:'30px'}}>Apartment Monthly Maintenance</h4>
                </div><br/>
                <div id='garbage-bill' align='center'>
                <label id='lab'>Garbage Bill: </label>&nbsp;
                <input type='text' id='garbage' name='garbage bill' placeholder='garbage bill amount'/>
                </div><br/>

                <div id='water-bill' align='center'>
                <label id='lab'>Municipal Water Bill: </label>&nbsp;
                <input type='text' id='water' name='water-bill' placeholder='water bill amount'/>
                </div><br/>

                <div id='electric-bill'align='center'>
                <label id='lab'>Electricity Bill: </label>&nbsp;
                <input type='text' id='electric' name='electric-bill' placeholder='electricity bill amount'/>
                </div><br/>

                <div id='watchman-salary'align='center'>
                <label id='lab'>Watchman Salary: </label>&nbsp;
                <input type='text' id='watchman' name='watchman-salary' placeholder='watchman salary'/>
                </div><br/>

                <div id='repairs'align='center'>
                <label id='lab'>Repairs if any: </label>&nbsp;
                <input type='text' id='repair' name='repair' placeholder='repair amount'/>
                </div><br/>

                <div id='maintenance'align='center'>
                <label id='lab'>Amount Collected: </label>&nbsp;
                <input type='text' id='total' name='maintenance' placeholder='maintenance Collected'/>
                </div><br/>

                <div id='expenditures'align='center'>
                <label id='lab'>Expenditures: </label>&nbsp;
                <input type='text' id='expenditure' name='expenditure' placeholder='expenditure amount'/>
                </div><br/>

                <div id='remain'align='center'>
                <label id='lab'>Remaining Amount: </label>&nbsp;
                <input type='text' id='remaining' name='remaining' placeholder='remaining Amount'/>
                </div><br/>

                <div id='bills'align='center'>
                <label id='lab'>Apartment Bill: </label>&nbsp;
                <input type='file' id='file' name='file'/>
                </div>
                <div id='btn'>
                <button type='button' id='bttn' name='remaining' placeholder='remaining Amount' onClick={upu}>Upload</button>
                </div>

                <div id='sub' align='center'>
                <button type='button' id='subm' name='remaining' placeholder='remaining Amount' onClick={sub}>Submit</button>
                </div>
                
                <div id='money'>
                <img src="Maintenance-Costs.jpeg" alt="tutor" style={{width:'100%',height:'100%',opacity:'0.7'}}/>
                </div>
                
                


            </form>

        </div>



        
        </>
    )
}