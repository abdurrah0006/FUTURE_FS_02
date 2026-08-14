const LeadFilters=({search,setSearch,statusFilter,setStatusFilter,sourceFilter,setSourceFilter})=>{

    return(
        <div className="filter-bar">
            <input type="text" placeholder="Search name or email..." value={search} onChange={(e)=>setSearch(e.target.value)} />

            <select value={statusFilter} onChange={(e)=>setStatusFilter(e.target.value)} >

                <option>All</option>
                <option>New</option>
                <option>Contacted</option>
                <option>Converted</option>
            </select>

            <select value={sourceFilter} onChange={(e)=>setSourceFilter(e.target.value)} >

                <option>All</option>
                <option>Website</option>
                <option>LinkedIn</option>
                <option>Referral</option>
                <option>Other</option>
            </select>
        </div>
    );
};

export default LeadFilters;