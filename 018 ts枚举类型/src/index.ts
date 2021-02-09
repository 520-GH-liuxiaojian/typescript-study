// 以下的代码实现逻辑虽然的简单的 但是代码字面亮意义看不出来的
// 不知道的 0 1 2 代表意义是什么

// 这个时候就使用 对象类型
// const Status = {
//     OFFLINE: 0,
//     ONLINE: 1,
//     DELETED: 2,
// };

// 使用 enum 枚举进行限制
enum Status {
    OFFLINE,
    ONLINE,
    DELETED
}

function getResult(status: number) {
    if (status === Status.OFFLINE) {
        return 'offline';
    }

    if (status === Status.ONLINE) {
        return 'online';
    }

    if (status === Status.DELETED) {
        return 'deleted';
    }

    return 'error';
}

getResult(0);
