const Columns = [
    {
      title: 'No.',
      dataIndex: 'key',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      sorter: {
        compare: (a, b) => a.date - b.date,
        multiple: 3,
      },
    },
    {
      title: 'Project',
      dataIndex: 'project',
      sorter: {
        compare: (a, b) => a.project - b.project,
        multiple: 2,
      },
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      sorter: {
        compare: (a, b) => a.subject - b.subject,
        multiple: 1,
      },
    },
    {
        title: 'Price',
        dataIndex: 'price',
        sorter: {
          compare: (a, b) => a.price - b.price,
          multiple: 1,
        },
      },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        sorter: {
          compare: (a, b) => a.quantity - b.quantity,
          multiple: 1,
        },
    },
    {
        title: 'Source',
        dataIndex: 'source',
        sorter: {
          compare: (a, b) => a.source - b.source,
          multiple: 1,
        },
    },
    {
        title: 'Total',
        dataIndex: 'total',
        sorter: {
          compare: (a, b) => a.total - b.total,
          multiple: 1,
        },
    },
];

  export default Columns