// utils/queryBuilder.js

module.exports = (queryParams) => {
    const query = {};
    const options = { limit: 20 }; // To hold additional query options like sort, limit, skip
    console.log(queryParams)
    Object.keys(queryParams).forEach(key => {
        
        if (key.startsWith('sort_')) {
            const field = key.replace('sort_', '');
            options.sort = { ...options.sort, [field]: queryParams[key].toLowerCase() === 'asc' ? 1 : -1 };
        }

        if (key === 'limit') {
            options.limit = parseInt(queryParams[key], 10);
        }

        if (key === 'skip') {
            options.skip = parseInt(queryParams[key], 10);
        }
    });

    displayItems = queryParams?.displayItems?.map(u => {
        return { [u]: 1 }
    })

    return { query, options, displayItems };
};