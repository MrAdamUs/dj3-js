// console.log(d3);
const DUMMY_DATA = [
  { id: 'd1', value: 15, region: 'USA' },
  { id: 'd2', value: 11, region: 'UK' },
  { id: 'd3', value: 12, region: 'India' },
  { id: 'd4', value: 13, region: 'China' },
  { id: 'd5', value: 14, region: 'Germany' },
];

const xScale = d3
  .scaleBand()
  .domain(DUMMY_DATA.map((dataPoint) => dataPoint.region))
  .rangeRound([0, 357])
  .padding(0.1);
const yScale = d3.scaleLinear().domain([0, 18]).range([250, 0]);

const container = d3.select('svg').classed('container', true);

const bars = container
  .selectAll('.bar')
  .data(DUMMY_DATA)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', xScale.bandwidth())
  .attr('height', (data) => 250 - yScale(data.value))
  .attr('x', (data) => xScale(data.region))
  .attr('y', (data) => yScale(data.value));

// d3.select('div')
//   .selectAll('p')
//   .data(DUMMY_DATA)
//   .enter()
//   .append('p')
//   .text((data) => data.region);
