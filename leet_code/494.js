/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var findTargetSumWays = function (nums, target) {
    const memo = {}
    return findTargetSumWaysRec(nums, 0, 0, target, memo)
};

function findTargetSumWaysRec(nums, start, target, sum, memo) {
    const memoKey = `${start},${sum}`
    if (memo[memoKey] !== undefined) return memo[memoKey]

    if (start === nums.length ) {
        return sum === target ? 1 : 0
    }

    if (start > nums.length) return

    const new_value = nums[start]
    const next_index = start + 1

    const add = findTargetSumWaysRec(nums, next_index, target, sum + new_value, memo)
    const subtract = findTargetSumWaysRec(nums, next_index, target, sum - new_value, memo)

    memo[memoKey] = add + subtract

    return memo[memoKey]
}

const nums = [1, 1, 1, 1, 1]
const target = 3


console.log(findTargetSumWays(nums, target))


/*


Claro! Vamos entender melhor esse problema com a verificação de chave do memo.

O que são "valores falsy" em JavaScript?
Em JavaScript, "valores falsy" são valores que, quando avaliados em um contexto booleano (como uma expressão if), são considerados falsos. Os valores falsy são:

false
0
"" (string vazia)
null
undefined
NaN
Ou seja, qualquer valor que seja falsy será tratado como false em uma expressão condicional.

O problema com a verificação if (memo[memoKey])
No seu código original, você usa a condição:

if (memo[memoKey]) return memo[memoKey];
Aqui, o que você está tentando fazer é verificar se o valor para uma chave memoKey já foi calculado, ou seja, se o resultado daquele subproblema já existe na cache (no objeto memo). Se sim, você retorna esse valor.

No entanto, o problema é que o valor calculado pode ser 0, e 0 é um valor falsy em JavaScript. Portanto, a condição if (memo[memoKey]) vai falhar quando o valor armazenado for 0, e você acabaria recalculando esse subproblema, o que não deveria acontecer.

Exemplo do erro:

Imagina que em algum momento, o valor de memo[memoKey] é calculado e o resultado é 0. Se, no futuro, o código tentar verificar se esse valor já foi calculado, a expressão memo[memoKey] será avaliada como falsy (pois 0 é falsy), e o valor 0 seria ignorado. Isso leva à recalculação desnecessária do subproblema.

Solução
A solução é garantir que você está verificando explicitamente a existência de uma chave em um objeto sem depender da conversão implícita para booleano. Uma forma segura de fazer isso é:

Usar memo.hasOwnProperty(memoKey), que vai verificar se a chave existe no objeto, independentemente do valor associado a ela.
Ou verificar explicitamente se o valor é undefined. Isso é importante porque, se um valor foi armazenado no memo, a chave existirá, mas o valor pode ser qualquer coisa, incluindo 0 ou NaN.
Correção do código
A forma mais segura de verificar a existência de uma chave em um objeto, sem ser afetado por valores falsy como 0, é:

if (memo.hasOwnProperty(memoKey)) return memo[memoKey];
Ou então, uma abordagem mais simples que verifica diretamente se o valor é undefined:

if (memo[memoKey] !== undefined) return memo[memoKey];
Essa condição garante que você só estará tentando acessar o valor já calculado se ele estiver realmente armazenado no memo, sem se preocupar com o fato de que o valor pode ser 0 ou outro valor falsy.


O contrário de falsy é truthy.

O que são valores truthy?
Em JavaScript, truthy são todos os valores que, quando avaliados em um contexto booleano (por exemplo, em uma expressão if), são considerados verdadeiros. Ou seja, qualquer valor que não seja falsy é considerado truthy.

Exemplos de valores truthy:

Qualquer número diferente de 0 (por exemplo, 1, -1, 3.14, etc.)
Qualquer string não vazia (por exemplo, "hello", "0", etc.)
Objetos (por exemplo, {}, [], etc.)
Funções
Valores como true
Em resumo, qualquer valor que não seja falsy será considerado truthy.

*/