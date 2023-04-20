import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { EmployeeRender } from '~/components';
function AddItem({ handleAddAttribute, type }) {
    const employeeData = JSON.parse(localStorage.getItem('employeeData'));
    const [visible, setVisible] = useState(0);
    return (
        <div>
            <Tippy
                visible={visible}
                placement={'bottom'}
                render={(attrs) => <EmployeeRender handleAddAttribute={[handleAddAttribute, type]} />}
            >
                <button
                    style={{ margin: '16px' }}
                    onClick={() => {
                        setVisible(!visible);
                    }}
                >
                    <i className="ti-pencil"></i>
                </button>
            </Tippy>
        </div>
    );
}

export default AddItem;
