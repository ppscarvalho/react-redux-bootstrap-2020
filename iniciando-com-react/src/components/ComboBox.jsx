export const ComboBox = () => {
  const nomes = ['Maria das Graças', 'Jose Carvalho', 'Antonio Paulo', 'Jose Oliveira', 'Carlos Ferreira'];
  const optionValue = nomes.map((p) => <option key={p}>{p}</option>);
  return <select>{optionValue}</select>;
};
