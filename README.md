# Rock, Paper, Scissors Smart contract (HW7 & 9), ответы на вопросы

В репозитории также хранится код обоих СмК и тесты для них. 

## HW7 Вопросы:

1. Конструктор СмК вызывается единожды при деплое. Если конструктор не явно не описан, создаётся пустой конструктор по умолчанию, который не инициализирует ничего. Если же конструктор имеет модификатор internal, т.е он недоступен для внешнего мира, то такой смарт контракт нельзя разместить в сети (можно, например, наследовать).
2. library не имеет состояния. Поэтому такой СмК не может быть уничтожен, он не имеет переменных, описывающих его состояние и участвовать в наследовании.
3. Memory (локальная память, очищается по завершении работы функций СмК), Storage (глобальная память, хранится на каждом узле сети), Stack(память для работы EVM) и Calldata (иммутабельное хранилище данных о вызове функции, в т.ч о её аргументах)
4. ABI определяет интерфейс программы, содержит описания её переменных и функций и то, как функции должны вызываться. С помощью ABI с СмК могут взаимодействовать сторонние приложения, в т.ч JS программы, используюшие web3 библиотеку.
5. Использование assembly вставок позволяет на более низком уровне работать с памятью и управлять программой. Например, при использовании таких вставок появляется возможность доступа напрямую к Стэку. В итоге так можно ускорять работу СмК и понижать объёмы газа, затрачиваемые транзакциями.
6. Типы msg (message), tx (transaction) и block нужны для получения метаинформации об окружении. Например, поле msg.sender содержит адрес аккаунта, вызвавшего функцию в СмК, а tx.origin - адрес аккаунта, первоначально вызвавшего транзакцию. Или, например, block.basefee, содержащий минимальную цену для транзакций.
7. СмК всега детерминирован, поэтому сам код смк получить случайное число не может. Можно либо получить случайное число извне блокчейна с помощью оракулов, либо получить псевдослучайное значение, опираясь на block.difficulty или block.timestamp.

## HW9 Вопросы:

1. Проведение тестирования в рабочей на EVM одного из узлов сети будет проходить слишком долго и ресурсозатратно. Как минимум, такой подход будет требовать размещения кода в EVM на каждой итерации разработки, что отнимет много лишнего времени. 
2. Для метода call: .call{value: <количество эфира>}(...); При использовании метода delegateCall передать валюту не получится. Метод delegateCall нужен для использования библиотечного кода другого смарт контракта, а библиотеки не имеют внутреннего состояния. Данный метод загружает код контракта и исполняет его так, как если бы тот был частью первого контракта.
