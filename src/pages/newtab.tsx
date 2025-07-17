import React from "react";

const tasks = {
  day: ["Проверить почту", "Позвонить заказчику"],
  week: ["Закрыть спринт", "Подготовить отчёт"],
  month: ["Релиз версии", "cnwonwoivnowinv"],
};

const TaskColumn = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-2">
        {items.map((task, idx) => (
          <li key={idx} className="bg-gray-100 p-2 rounded">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function NewTabPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Твои задачи</h1>
      <div className="flex gap-6 flex-wrap justify-center">
        <TaskColumn title="Сегодня" items={tasks.day} />
        <TaskColumn title="На неделю" items={tasks.week} />
        <TaskColumn title="На месяц" items={tasks.month} />
      </div>
    </main>
  );
}
