$(document).ready(function() {
    $('.btn-generate').click(function(){
        clear_data();

        var irl_task = $("#tasks-select").val();
        var quest = quests[irl_task].random();
        
        $("#quest-title").append(quest.title);
        $("#quest-description").append(quest.description);
        $("#quest-tasks").append(generate_tasks_html(quest.tasks));
        // var loadingMessage = loading_list.random();
    });
});

function clear_data(){
    $("#quest-title").html("");
    $("#quest-description").html("");
    $("#quest-tasks").html("");
}

function generate_tasks_html(tasks){
    var htmlAttr = "";
    var task = "";
    var loops = 0;
    var taskIds = [];
    while(loops < 2) {
        task = tasks.random();

        if (!$.inArray(task.id, taskIds)) {
            continue;
        }

        taskIds.push(task.id);

        htmlAttr += '<div class="form-check"><input type="checkbox" id="' + loops + 'quest" class="form-check-input" name="'  + loops + 'quest" >';
        htmlAttr += '<label for="' + loops + 'quest" class="form-check-label">'+task.value+'</label></div>';

        loops++;
    }

    return htmlAttr;
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}