import React from 'react'




const Tabs = (props) => {
        const { allTabs, currentTabIndex, setCurrentTabIndex } = props;
    
    
        const setSelectedTab = (index) => {
        setCurrentTabIndex(index);
        }
        return (
        <div>
    
            <nav className='navbar navbar-expand-lg bg-dark'>
            {
                allTabs.map((item, index) => (
                    <div className="nav nav-tabs " id="nav-tab" role="tablist" onClick={(e) => setSelectedTab(index) }>
                        <button class="nav-link active bg-dark text-light " id="nav-home-tab" >{item.label}</button>
                    </div>

                ))
            }
            </nav>
        </div>
        )
    }
    


export default Tabs;