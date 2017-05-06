var main = new Terminator(document.getElementById('contentWrapper'),
            {
                prefix: '<span class="green">copperstick6@utexas</span>:<span class="red">~$</span> ',
                alwaysFocus: true,
                autoScroll: (window.innerWidth >= 600)
            });

window.onresize = function() {
    console.log("Resizing!");
    if (window.innerWidth >= 600) {
        main.config.autoScroll = true;
    } else {
        main.config.autoScroll = false;
    }
};

function printClass(term, className) {
    var cloneTarget = null;
    if (className && (cloneTarget = document.getElementsByClassName(className))) {
        if (cloneTarget[0]) {
            term.writeHTML(cloneTarget[0].innerHTML);
        } else {
            term.writeLine("cat: " + className + ": No such file or directory");
        }
    }
}

main.register(function(term, command) {
    term.writeLine('welcome.txt');
    term.writeLine('nuclear_launch_codes.txt');
    term.prompt();
}, 'ls');

main.register(function(term, command) {
    command = command.split(' ');
    var arg = command[1] || '';
    if (arg.indexOf('.txt') !== -1
        && arg.indexOf('.txt') === (arg.length - 4))
        arg = arg.substring(0, arg.indexOf('.txt'));

    printClass(term, arg);
    term.prompt();
    return;
}, 'cat');


main.register(function(term, command) {
	printClass(term, 'help');
	term.prompt();
	return;
}, ['help', 'man']);

main.register(function(term, command) {
    printClass(term, 'git');
    term.prompt();
    return;
}, 'git');

main.register(function(term, command) {
    printClass(term, 'school');
    term.prompt();
    return;
}, 'school');

main.register(function(term, command) {
    term.writeLine('Taking you to my resume');
    setTimeout(function() {
        window.location = 'https://drive.google.com/file/d/0BzIbcYGQXhwdclNOMzZwNVlwRDg/view?usp=sharing';
        term.prompt();
    }, 750);
}, 'resume');

main.register(function(term, command) {
    printClass(term, 'projects');
    term.prompt();
    return;
}, 'projects');

main.register(function(term, command) {
    printClass(term, 'sp17');
    term.prompt();
    return;
}, 'sp17');

main.register(function(term, command) {
    printClass(term, 'fa16');
    term.prompt();
    return;
}, 'fa16');

main.register(function(term, command) {
    printClass(term, 'sp17c');
    term.prompt();
    return;
}, 'sp17c');

main.register(function(term, command) {
    printClass(term, 'orgs');
    term.prompt();
    return;
}, 'orgs');

main.register(function(term, command) {
    printClass(term, 'rapiddiligence');
    term.prompt();
    return;
}, 'rapiddiligence');

main.register(function(term, command) {
    printClass(term, 'cs429');
    term.prompt();
    return;
}, ['cs429', 'CS429']);

main.register(function(term, command) {
    printClass(term, 'cs314');
    term.prompt();
    return;
}, ['cs314', 'CS314']);

main.register(function(term, command) {
	term.writeLine('/utexas/utcs/orgs/isss');
	term.prompt();
}, 'pwd');

main.register(function(term, command) {
	term.element.innerHTML = '';
	term.prompt();
}, 'clear');

main.register(function(term, command) {
    term.writeLine('This user is not in the cders file. This incident has been reported.');
    term.prompt();
}, 'cd');

main.register(function(term, command) {
    term.writeLine('idk, who are you?');
    term.prompt();
}, 'whoami');

main.register(function(term, command) {
    term.writeLine(command.split(' ').slice(1).join(' '));
    term.prompt();
}, 'echo');

main.register(function(term, command) {
    var contentWrapper = document.getElementById('contentWrapper');
    contentWrapper.classList.toggle('hacker');
    term.writeLine('Hacker mode: ' + (contentWrapper.classList.contains('hacker') ? 'ENABLED' : 'DISABLED'));
    term.prompt();
}, ['hack', 'hacker']);

main.prompt();
main.autoType('cat welcome.txt', 1000);
