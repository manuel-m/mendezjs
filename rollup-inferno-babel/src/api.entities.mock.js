export default function(entity) {
  if (entity === 'config.json') {
    return {
      robots: {
        format: {
          columns: [
            'civility',
            'first_name',
            'last_name',
            'capacity',
            'elog',
            'loging_address',
            'phones',
            'organizationId',
            'groups',
          ],
          delimiters: [';', '|'],
          quote: '"',
        },
      },
    };
  }
  if (entity === 'robots') {
    return [
      ['Arm 464564654', 'tx2', ['groupe a', 'groupe b', 'groupe c']],
      ['Arm 417987546', 'tx', ['groupe a', 'groupe b', 'groupe c', 'groupe D']],
      ['Arm 129875161', 'tx2', ['groupe a', 'groupe b', 'groupe c']],
      ['Arm 456654567', 'tx', ['groupe a']],
    ];
  }
}
