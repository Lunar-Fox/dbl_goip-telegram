exports.getLocale = function (locale) {
    let uitext = {};
    switch(locale) {
        case 'ru':
            uitext = {
                newmessage: 'Новое сообщение',
                slot: 'Слот',
                channel: 'Канал',
                simnumber: 'Номер SIM',
                fromnumber: 'От',
                unnamed: 'Без имени',
                notassigned: 'Не задан',
                administrator: 'Администратор',
                added: 'добавлен',
                usernotfound: 'Пользователь не найден',
                novalue: 'Не указано значение',
                slotmustbeinteger: 'Номер слота должен быть целым числом',
                settingsupdated: 'Настройки обновлены',
                removed: 'удален',
                nosimdata: 'Нет данных о состоянии SIM-карт',
                hello: 'Привет',
                addedsimforuser: 'Пользователю добавлена SIM-карта ',
                simalreadyexists: 'У этого пользователя уже есть доступ к SIM-карте #',
                removedfromchannel: 'Пользователь удален из получателей SIM-карты #',
                nouserinrecipients: 'Этого пользователя нет в получателях SIM-карты #',
                incorrectvalue: 'Неверное значение',
                restricted: 'Недостаточно прав',
            }
        break;
        case 'en':
            uitext = {
                newmessage: 'A new message',
                slot: 'Slot',
                channel: 'Channel',
                simnumber: 'SIM number',
                fromnumber: 'From',
                unnamed: 'No name',
                notassigned: 'Not assigned',
                administrator: 'Administrator',
                added: 'added',
                usernotfound: 'User not found',
                novalue: 'No value specified',
                slotmustbeinteger: 'Slot number must be an integer',
                settingsupdated: 'Settings updated',
                removed: 'deleted',
                nosimdata: 'No SIM-cards data',
                hello: 'Hello',
                addedsimforuser: 'SIM card added to user',
                simalreadyexists: 'This user already has access to the SIM card #',
                removedfromchannel: 'User removed from SIM recipients #',
                nouserinrecipients: 'This user is not in the recipients of the SIM card #',
                incorrectvalue: 'Incorrect value',
                restricted: 'Action is restricted',
            }
        break;
    }
    return uitext;
}