
addEventListener('message', (event: MessageEvent) => {
  // @ts-ignore
  tasks.filter(event.data);
});


const tasks = {
  filter(data): void {
    const filterData = data.list.filter(item => (item.value >= data.param));
    // @ts-ignore
    postMessage({ result: filterData });
  }
};
