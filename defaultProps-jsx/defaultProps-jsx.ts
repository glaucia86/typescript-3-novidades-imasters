/**
 * Arquivo: defaultProps-jsx.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
 */

// Antes: 
/*export interface Props { name?: string }

export class Saudar extends React.Component<Props> {
    render() {
        const { nome } = this.props;

        return <div>Fala ${nome!.toUpperCase()}!</div>;
    }

    static defaultProps = { nome: 'Glaucia Lemos' }
}*/

// Depois (com a versão 3.0):
export interface Props {
    nome: string
}

export interface Props {
    nome: string
}

export class Saudar extends React.Component<Props> {
    render() {
        const { nome } = this.props;
        return <div>Fala ${nome.toUpperCase()}!</div>;
    }
    static defaultProps = { nome: "Glaucia Lemos"}
}

// Sem a necessidade de fazer uso de tipo assertion aqui:
let texto = <Saudar />