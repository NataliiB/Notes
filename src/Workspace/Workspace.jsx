import "./Workspace.css"
import { AccessDB } from 'react-indexed-db';

const Workspace =()=>{
    return(<>
     <AccessDB objectStore="notes">
      {db => {
        console.log('notesDB: ', db);
        return <div>{JSON.stringify(db)}</div>;
      }}
    </AccessDB>
    <div className="workspace">Workspace</div>
    </>)
}
export default Workspace;