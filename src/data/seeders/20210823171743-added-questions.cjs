module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'questions',
            [
                {
                    text: 'Я ніколи не закохувався.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не співав в караоке.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не робив вигляд, що не помітив знайомого.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не лякався відображення в зеркалі.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не співав у душі.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не спав в одязі, в якому ходив на прогулянку.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не робив вигляд, що сміюсь над жартом, який не зрозумів.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не боявся клоунів.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не прикидався хворим, щоб не йти у школу/на роботу.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не робив "качине" обличчя під час селфі.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не сміявся вголос, коли відправляв смайлик, що сміється.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не перечитував листа, після того, як відправив його.',
                    category_id: 1,
                },
                {
                    text: "Я ніколи не шукав інформацію про свою сім'ю в Інтернеті.",
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не плакав без причин.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не слідував ні за ким через соціальні мережі.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не був на стороні під час стосунків.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не передаровував подарунки.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не літав на вертольоті.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не був на сцені перед натовпом людей.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не не брехав на співбесіді.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не слідкував за людиною, в якому закохався.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не зраджував своєму партнеру.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не купався голим.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не використовував шпаргалки на екзамені.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не брав чиюсь їжу із загального холодильника.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не грав на роздівання у щось.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не курив.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не пісяв в басейн.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не засинав при людях.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не засинав на роботі.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не брехав в резюме.',
                    category_id: 1,
                },
                {
                    text: "Я ніколи не дзвонив п'яним колишній.",
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не пукав перед тим, хто мені подобається.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не читав повідомлення мого партнера.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не був в лікарні.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не співав публічно.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не грав на музичному інструменті.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не вивчав іноземний мову.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не пропонував спиртові напої або брав їх від незнайомого людини.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не брехав про свій дохід.',
                    category_id: 1,
                },
                {
                    text: 'Мене ніколи не відшивали.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не зустрічався з людиною, що молодша мене.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не користувався телефоном у кінотеатрі.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не агітував друга покинути свого партнера.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколине стрибав через турнікет.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не на кого не здавав.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не був донором.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не називав свого партнера іншим іменем.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не вважав когось із своїх друзів некрасивим.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не був вегетаріанцем.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не брехав про свій вік.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не хворів вітрянкою.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи нікому не підморгував.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи ні по кому не страждав/а.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не брехав своєму найкращому другові.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не усував затори зі снігу на дорогах.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не обманював чергу.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не ображався ні на кого більше року.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не розповідав таємницю, яку пообіцяв не розповідати.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи нікого не калічив.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не сидів на дієті.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не стриг собі волосся.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не гуляв весь день.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не признавався нікому в коханні.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не працював з людиною, яку терпіти не можу.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не їв те, що впало на підлогу.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не дивився телевізор цілий день.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не зустрічався з кимось більше року.',
                    category_id: 1,
                },
                {
                    text: 'Мене ніколи не травили.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не пукав, покладаючи вину на іншу людину.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не був на побаченні всліпу.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не отримував і не залишав засос.',
                    category_id: 1,
                },
                {
                    text: 'У мене ніколи не рвався одяг від моєї ваги.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не тікав, що врятувати своє життя.',
                    category_id: 1,
                },
                {
                    text: 'У мене ніколи не було швів.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не намагався примусити когось ревнувати.',
                    category_id: 1,
                },
                {
                    text: 'У мене ніколи не згорала їжа під час приготування.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не займався дайвінгом.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не слідкував за життям колишньої.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не танцював під дощем.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не танцював на столі.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не спав в машині.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не брав участь в телевізійній передачі.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не отримував опік.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не мав отруєння.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи спеціально комусь не давав погану пораду.',
                    category_id: 1,
                },
                {
                    text: 'У мене ніколи не було операції.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не зачіпав припарковану машину.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не поправляв одяг на людях.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не носив парик.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не ламав кості.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не повертав одяг магазину.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не обмочувався, будучи дорослим.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не парковався на місці для інвалідів.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не фліртовав з жінкою, маючи партнерку.',
                    category_id: 1,
                },
                {
                    text: 'У мене ніколи не було брекетів.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не брехав про своє ставлення до людини.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не розбивав серця.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не зустрічався з людиною, з якою познайомився через додаток.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не використовував старі підкати.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не плавав голим.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не ходив без нижньої білизни по вулиці.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не спав голим.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не зустрічався більше, ніж з однією дівчиною одночасно.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не закохувався у вчителя.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не цілувався з кимось своєї статі.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не був на нудиському пляжі.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не давав нікому номер свого телефону.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не плавав на яхті.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не бачив падаючої зірки.',
                    category_id: 1,
                },
                {
                    text: 'Ніколи не випадково носив невідповідні шкарпетки.',
                    category_id: 1,
                },
                {
                    text: 'Ніколи в мене не було жахливої стрижки.',
                    category_id: 1,
                },
                {
                    text: 'Ніколи в мене не ламалася кістка.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не спав надворі, сп’янівши.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не пив віскі, як воду.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не п’яний нікому не телефонував.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не ходив додому до неправильного будинку, сп’янівши.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не займався спортом, випиваючи.',
                    category_id: 1,
                },
                {
                    text: 'Ніколи в мене ніколи не було переляку вагітності.',
                    category_id: 1,
                },
                {
                    text: 'Ніколи не пив, коли їхав у громадському транспорті.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не міняв лампочку самостійно.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не падав через випивку.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не відкривав пляшку іншою пляшкою.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не пив сам.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не був настільки п’яним, щоб здобути впевненість для чогось.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не їв устриць.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не випивав спиртне, а потім блював.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не робив пострілу в тіло.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не худнув.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не голосував на виборах.',
                    category_id: 1,
                },
                {
                    text: 'Ніколи мені ніколи не обдаровували прикраси.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не робив пропозицій про одруження.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не годував когось ложкою.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не надсилав комусь милого ранкового текстового повідомлення.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не пробував швидкісних побачень.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не отримував квітів від когось, з ким я зустрічаюся.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не ночував з кимось на пляжі.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не був в театрі.',
                    category_id: 1,
                },
                {
                    text: 'Ніколи не мав романтичної вечері при свічках.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не намагався викрасти паролі партнера.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не переслідував когось в Instagram.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не шкодував про знайомство з кимось.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не розмовляв з кимось цілу ніч.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не розлучався з кимось через текст.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не цілував когось у ліфті.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не ламав свій мобільний телефон.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не заходив до когось у ванній.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не крав щось комусь.',
                    category_id: 1,
                },
                {
                    text: "Я ніколи не залишав п'яної голосової пошти.",
                    category_id: 1,
                },
                {
                    text: 'Я ніколи випадково не надсилав текст не тій людині.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не пробивав стіну і не шкодував про це, бо було боляче.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не випадково їв собачу їжу.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не блимав кимось.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи гордо не відригував.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не сміявся так сильно, що пісяв сам.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не був на весіллі незнайомців, аби поїсти.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не одягався як протилежна стать.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не стрибав у басейн з одягом.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не пробував самогону.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не літав першим класом.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не використовував підроблене посвідчення особи.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не проходив 24 години, не приймаючи душ.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не рятував чуже життя.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не брехав своєму найкращому другу про те, з ким я був.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не бував у Діснейленді.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не вдавав, що знаю незнайомця, бо відчував, що хтось йде за мною.',
                    category_id: 1,
                },
                {
                    text: 'Мені ніколи не подобалося щось, що я зготував.',
                    category_id: 1,
                },
                {
                    text: 'Ніколи в мене ніколи не було нападу паніки.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не пробував ікру.',
                    category_id: 1,
                },
                {
                    text: 'Ніколи раніше я не використовував чужий акаунт.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не засинав на уроці.',
                    category_id: 1,
                },
                {
                    text: 'Ніколи мене ніколи не звільняли.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не цілував більше однієї людини за 24 години.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не танцював на барі.',
                    category_id: 1,
                },
                {
                    text: 'Ніколи мене не виганяли з пабу, клубу, бару.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не брехав, щоб захистити друга, що обманює.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не робив оголених фотографій друга.',
                    category_id: 1,
                },
                {
                    text: "Я ніколи не ставав таким п'яним, що клявся більше ніколи не пити.",
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не цілував когось на публіці.',
                    category_id: 1,
                },
                {
                    text: 'Ніколи в мене не було сварок  з коханою на публіці.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не пропускав тікав з кафе не заплативши.',
                    category_id: 1,
                },
                {
                    text: 'Ніколи не вигравав у лотерею.',
                    category_id: 1,
                },
                {
                    text: 'Ніколи мені не доводилося звертатися до суду.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не вилазив з вікна.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не сміявся так сильно, що пісяв у штани.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не пробував палити марихуану.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не робив татуювання.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не грав фальшивого партнера комусь.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не прикидався, що хворий, щоб люди звертали на мене увагу.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не витрачав на гаманець більше 100 доларів.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не бив комусь посуд.',
                    category_id: 1,
                },
                {
                    text: 'Мене ніколи не арештовували.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не гуляв без зупинок понад двадцять чотири години.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не підроблював документи.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не порушував закон.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не вступав у бійку з кимось.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не читав роман.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не спав на балконі.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не брехав батькам заради грошей.',
                    category_id: 1,
                },
                {
                    text: 'Я ніколи не літав на пароплані.',
                    category_id: 1,
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete(
            'questions',
            { id: { [Sequelize.Op.lte]: 200 } },
            {},
        );
    },
};
