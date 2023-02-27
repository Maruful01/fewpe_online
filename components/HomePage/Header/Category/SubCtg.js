import React from 'react';
import Link from 'next/link';

const SubCtg = ({ctg}) => {
  
    return (
        <div className="sub-ctg-component">
            <ul>
                {ctg.map (subCtg => <div key={subCtg.id}><Link href="/"><a><li> {subCtg.scTitle} </li></a></Link></div>)}
            </ul>
        </div>
    );
};

export default SubCtg;